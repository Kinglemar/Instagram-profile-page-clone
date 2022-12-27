
export default function PicturesComp(props) {
    return (
        <div className="line section">
            { props ? props.children : <h1 className="p-5 text-2xl text-center">Hello world, feature coming soon</h1>}
        </div>
    )
}