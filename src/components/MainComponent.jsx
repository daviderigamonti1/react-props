import Card from "./Card.jsx";
import posts from "../data/posts.js";
function MainComponent() {
    const postItem = [...posts];
    const publishedPosts = postItem.filter((post) => post.published === true)
    return (
        <main className="container">
            <div className="row gy-4">
                {publishedPosts.map((post) => {
                    const imageUrl = post.image || "https://placehold.co/600x400";
                    return (
                        <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                            <Card
                                image={imageUrl}
                                title={post.title}
                                content={post.content}
                            />
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
export default MainComponent;