import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Message.scss";
import { ButtonLoading } from "../../components/Loading/Loading";
import { Textarea } from "@/components/ui/textarea";

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();

  const [message, setMessage] = useState("");

  const { isLoading, error, data } = useQuery(["messages", id], () =>
    newRequest.get(`/messages/${id}`).then((res) => res.data)
  );

  const mutation = useMutation((message) => newRequest.post(`/messages`, message), {
    onSuccess: () => {
      queryClient.invalidateQueries(["messages", id]);
    },
  });

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    const desc = message.trim();
    if (desc) {
      mutation.mutate({
        conversationId: id,
        desc,
      });
      setMessage("");
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
          <p>Error: {error.message}</p>
        ) : (
          <>
            <div className="messages">
              {data.map((m) => (
                <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
            <hr />
            <form className="write" onSubmit={handleSubmit}>
              <Textarea
                type="text"
                placeholder="Write a message"
                value={message}
                onChange={handleMessageChange}
                onKeyPress={handleKeyPress}
              />
              <button type="submit">Send</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Message;
