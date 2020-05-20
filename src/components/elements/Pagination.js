import React from 'react'

function Pagination(){
    return(
        <ul className="actions pagination">
			<li><a href="https://menji.netlify.app" className="disabled button large previous">Previous Page</a></li>
			<li><a href="https://menji.netlify.app" className="button large next">Next Page</a></li>
		</ul>
    )
}

export default Pagination;