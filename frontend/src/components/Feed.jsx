import { useEffect, useState } from "react"
import MessageCard from "./MessageCard"
import { useUserStore } from "../store/store"
import MessageField from "./MessageField"
import { fetchMessages } from "../api/api"
import { useMessageStore } from "../store/UseMessageStore"

const Feed = ({ myOwn }) => {
    const { messages, getMessages } = useMessageStore()
    const {jwt} = useUserStore()

    useEffect(() => {
        const handleFetch = async () => {
            try {
                await getMessages();
            } catch (err) {
                console.error(err)
            }
        }
        handleFetch()
    }, [])

    return (
        <>

            <div className="messages-section">
                <div className="container">
                    <h2 className="section-title">Последние сообщения</h2>
                    <div className="messages-gtid">
                        {!myOwn 
                        ? messages && 
                        messages.map((message, index) => (
                            <MessageCard key={index} {...message} />
                        ))
                            : messages && messages.filter((message) => message.userId == jwt.userId
                            )
                                .map((message, index) => (
                                    <MessageCard 
                                    key={index} 
                                    {...message} 
                                    />
                                ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Feed