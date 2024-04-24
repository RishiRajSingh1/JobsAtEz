import { useMutation, useQuery, useQueryClient } from "react-query";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Message.scss";
import { ButtonLoading } from "../../components/Loading/Loading";
import { Textarea } from "@/components/ui/textarea";

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(["messages", id], () =>
    newRequest.get(`/messages/${id}`).then((res) => res.data)
  );

  const mutation = useMutation((message) => newRequest.post(`/messages`, message), {
    onSuccess: () => {
      queryClient.invalidateQueries(["messages", id]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value.trim();
    if (desc) {
      mutation.mutate({
        conversationId: id,
        desc,
      });
      e.target[0].value = "";
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      queryClient.invalidateQueries(["messages", id]);
    }, 10000); 
    return () => clearInterval(timer);
  }, [id, queryClient]);

  return (
    <div className="message">
      <div className="box">
        <span className="messaging">
          <Link to="/messages">Messages</Link>
        </span>
        {isLoading ? (
          <ButtonLoading />
        ) : error ? (
          "Error"
        ) : (
          <>
            <div className="messages">
              {data.map((m) => (
                <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
                  {/* <img src={m.img} alt="" /> */}
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
            <hr />
            <form className="write" onSubmit={handleSubmit}>
              <Textarea type="text" placeholder="Write a message" />
              <button type="submit">Send</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Message;
