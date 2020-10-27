
import React from 'react'
import '../../STYLES/Styles/scssStyles/main-grid.scss'

const GridTest = () => {
    return (
        <div className="container">
            <div className="grid header">Header</div>
            <div className="grid hero">Hero</div>
            <div className="grid sidebar">Sidebar</div>
            <div className="grid content">Main Content
    <p>**If things do not look right, make sure your browser is in "Experimental Mode".  !!!!aaaaaaa aaaaaaaa aaaaaaa aaaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa     </p>
            </div>
            <div className="grid extra">Extra Content</div>
            <div className="grid related-images">Related Images</div>
            <div className="grid related-posts">Related Posts</div>
            <div className="grid footer">Footer</div>
        </div>
    )
}

export default GridTest

