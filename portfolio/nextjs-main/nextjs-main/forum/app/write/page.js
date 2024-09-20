export default function write() {
    return (
        <div className="t-34">
            <h4>글 작성</h4>
            <form action="/api/post/new" method="POST">
            <input name="title" placeholder="글제목"></input>
            <input name="content" placeholder="내용"></input>
            <button type="submit">제출</button>
            </form>
        </div>
    );
}