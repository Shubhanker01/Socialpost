import { useState } from "react"
import DisplayPost from "./DisplayPost"
import {Link} from 'react-router-dom'

const UserPost = () => {
    const [caption, setCaption] = useState("")
    const [description, setDescription] = useState("")

    const captionEventChange = (e) => {
        setCaption(e.target.value)
    }
    const descriptionEventChange = (e) => {
        setDescription(e.target.value)
    }

    const addPost = async () => {
        if (caption == "" || description == "") {
            alert('please enter all the fields')
        }
        else {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/x-www-form-urlencoded"
            }
            let bodyContent = `caption=${caption}&description=${description}`;

            let response = await fetch("http://localhost:3000/post", {
                method: "POST",
                body: bodyContent,
                headers: headersList
            });

            let data = await response.text();
            alert(data)
            setCaption("")
            setDescription("")
        }

    }
    return (
        <>
            <h1>Add your posts</h1>
            <Link to='/displaypost'>Display posts</Link>
            <div>
                <form>
                    <div className="row mb-3">
                        <label for="username" className="col-sm-2 col-form-label">Post</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="Add your title here" aria-label="Username" aria-describedby="basic-addon1" name="post" id="caption" value={caption} onChange={captionEventChange} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="exampleFormControlTextarea1" className="col-sm-2 form-label">Add post</label>
                        <div className="col-sm-10">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={descriptionEventChange}></textarea>
                        </div>
                    </div>
                    <div class="col-auto">
                        <button type="button" class="btn btn-primary mb-3" onClick={addPost}>Add Post</button>
                    </div>
                </form>

            </div>


        </>
    )
}
export default UserPost