import Feed from "../components/Feed"

const MyMessages = () => {
    return (
        <>
            <h1>Messahes</h1>
            <Feed myOwn={true}></Feed>
        </>
    )
}
export default MyMessages