import { useState } from "react";
import Comments from "./Comments";

const Post = ({ title, description, likes, id }) => {
    const [updateTitle, setUpdateTitle] = useState(title)
    const [updateDescription, setUpdateDescription] = useState(description)

    const deletePost = async () => {
        let headersList = {
            "Accept": "*/*"
        }
        let response = await fetch(`http://localhost:3000/delete/${id}`, {
            method: "DELETE",
            headers: headersList
        });

        let data = await response.text();
        alert(data)
    }

    const updatePost = async () => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded"
        }
        let bodyContent = `title=${updateTitle}&description=${updateDescription}`;

        let response = await fetch(`http://localhost:3000/update/${id}`, {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.text();
        alert(data)
    }

    const likePost = async () => {
        let headersList = {
            "Accept": "*/*"
        }

        let response = await fetch(`http://localhost:3000/likes/${id}`, {
            method: "POST",
            headers: headersList
        });

        let data = await response.text();
        alert(data)
    }

    return (
        <>
            <div class="card">
                <h5 class="card-header">{title}</h5>
                <div class="card-body">
                    <p class="card-text">{description}</p>
                    <button onClick={likePost} type="button" class="btn btn-primary" id="liveAlertBtn">{likes} Likes</button>
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                        </svg>
                        Update
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Delete
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Post</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Are you sure you want to delete this post?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={deletePost} type="button" class="btn btn-primary" data-bs-dismiss="modal">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Comments id={id} />
            </div>

            {/* delete modal */}

            {/* update modal */}
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Post</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Title:</label>
                                    <input type="text" class="form-control" id="recipient-name" value={updateTitle} onChange={(e) => { setUpdateTitle(e.target.value) }} />
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Description:</label>
                                    <textarea class="form-control" id="message-text" value={updateDescription} onChange={(e) => { setUpdateDescription(e.target.value) }}></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={updatePost} type="button" class="btn btn-primary" data-bs-dismiss="modal">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Post