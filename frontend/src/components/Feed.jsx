import { useEffect, useState } from "react"
import MessageCard from "./MessageCard"
import { fetchPost } from "../api/api"
import { useUserStore } from "../store/store"
import MessageField from "./MessageField"

const Feed = () => {
    const [messages, setMessages] = useState(undefined)
    const {jwt} = useUserStore()
    useEffect(() => {
        const handleFetch = async () => {
            try {
                setMessages(await fetchPost())
            } catch (err) {
                console.error(err)
            }
        }
        handleFetch()
    }, [])

    return (
        <>
        {jwt && <MessageField/>}
        <div className="messages-section">
            <div className="container">
                <h2 className="section-title">Последние сообщения</h2>
                <div className="messages-gtid">
                    {messages && messages.map((message) => (
                        <MessageCard key={message.id} {...message} />))}
                </div>
            </div>
        </div>
        </>
    )
}
export default Feed