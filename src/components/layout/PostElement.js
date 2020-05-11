import React from 'react'


function PostElement(){
    return(
        <article className="post">
								<header>
									<div className="title">
										<h2><a href="#">Elements</a></h2>
										<p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
									</div>
									<div className="meta">
										<time className="published" datetime="2015-10-18">October 18, 2015</time>
										<a href="#" className="author"><span className="name">Jane Doe</span><img src="images/avatar.jpg" alt="" /></a>
									</div>
								</header>

								<section>
									<h3>Lists</h3>
									<div className="row">
										<div className="col-6 col-12-medium">
											<h4>Unordered</h4>
											<ul>
												<li>Dolor pulvinar etiam.</li>
												<li>Sagittis adipiscing.</li>
												<li>Felis enim feugiat.</li>
											</ul>
											<h4>Alternate</h4>
											<ul className="alt">
												<li>Dolor pulvinar etiam.</li>
												<li>Sagittis adipiscing.</li>
												<li>Felis enim feugiat.</li>
											</ul>
										</div>
										<div className="col-6 col-12-medium">
											<h4>Ordered</h4>
											<ol>
												<li>Dolor pulvinar etiam.</li>
												<li>Etiam vel felis viverra.</li>
												<li>Felis enim feugiat.</li>
												<li>Dolor pulvinar etiam.</li>
												<li>Etiam vel felis lorem.</li>
												<li>Felis enim et feugiat.</li>
											</ol>
											<h4>Icons</h4>
											<ul className="icons">
												<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
												<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
												<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
												<li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
											</ul>
										</div>
									</div>
									<h3>Actions</h3>
									<div className="row">
										<div className="col-6 col-12-medium">
											<ul className="actions">
												<li><a href="#" className="button">Default</a></li>
												<li><a href="#" className="button">Default</a></li>
												<li><a href="#" className="button">Default</a></li>
											</ul>
											<ul className="actions small">
												<li><a href="#" className="button small">Small</a></li>
												<li><a href="#" className="button small">Small</a></li>
												<li><a href="#" className="button small">Small</a></li>
											</ul>
											<ul className="actions stacked">
												<li><a href="#" className="button">Default</a></li>
												<li><a href="#" className="button">Default</a></li>
												<li><a href="#" className="button">Default</a></li>
											</ul>
											<ul className="actions stacked">
												<li><a href="#" className="button small">Small</a></li>
												<li><a href="#" className="button small">Small</a></li>
												<li><a href="#" className="button small">Small</a></li>
											</ul>
										</div>
										<div className="col-6 col-12-medium">
											<ul className="actions stacked">
												<li><a href="#" className="button fit">Default</a></li>
												<li><a href="#" className="button fit">Default</a></li>
											</ul>
											<ul className="actions stacked">
												<li><a href="#" className="button small fit">Small</a></li>
												<li><a href="#" className="button small fit">Small</a></li>
											</ul>
										</div>
									</div>
								</section>

								<section>
									<h3>Table</h3>
									<h4>Default</h4>
									<div className="table-wrapper">
										<table>
											<thead>
												<tr>
													<th>Name</th>
													<th>Description</th>
													<th>Price</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Item One</td>
													<td>Ante turpis integer aliquet porttitor.</td>
													<td>29.99</td>
												</tr>
												<tr>
													<td>Item Two</td>
													<td>Vis ac commodo adipiscing arcu aliquet.</td>
													<td>19.99</td>
												</tr>
												<tr>
													<td>Item Three</td>
													<td> Morbi faucibus arcu accumsan lorem.</td>
													<td>29.99</td>
												</tr>
												<tr>
													<td>Item Four</td>
													<td>Vitae integer tempus condimentum.</td>
													<td>19.99</td>
												</tr>
												<tr>
													<td>Item Five</td>
													<td>Ante turpis integer aliquet porttitor.</td>
													<td>29.99</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="2"></td>
													<td>100.00</td>
												</tr>
											</tfoot>
										</table>
									</div>

									<h4>Alternate</h4>
									<div className="table-wrapper">
										<table className="alt">
											<thead>
												<tr>
													<th>Name</th>
													<th>Description</th>
													<th>Price</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Item One</td>
													<td>Ante turpis integer aliquet porttitor.</td>
													<td>29.99</td>
												</tr>
												<tr>
													<td>Item Two</td>
													<td>Vis ac commodo adipiscing arcu aliquet.</td>
													<td>19.99</td>
												</tr>
												<tr>
													<td>Item Three</td>
													<td> Morbi faucibus arcu accumsan lorem.</td>
													<td>29.99</td>
												</tr>
												<tr>
													<td>Item Four</td>
													<td>Vitae integer tempus condimentum.</td>
													<td>19.99</td>
												</tr>
												<tr>
													<td>Item Five</td>
													<td>Ante turpis integer aliquet porttitor.</td>
													<td>29.99</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="2"></td>
													<td>100.00</td>
												</tr>
											</tfoot>
										</table>
									</div>
								</section>

								<section>
									<h3>Buttons</h3>
									<ul className="actions">
										<li><a href="#" className="button large">Large</a></li>
										<li><a href="#" className="button">Default</a></li>
										<li><a href="#" className="button small">Small</a></li>
									</ul>
									<ul className="actions fit">
										<li><a href="#" className="button fit">Fit</a></li>
										<li><a href="#" className="button fit">Fit</a></li>
										<li><a href="#" className="button fit">Fit</a></li>
									</ul>
									<ul className="actions fit small">
										<li><a href="#" className="button fit small">Fit + Small</a></li>
										<li><a href="#" className="button fit small">Fit + Small</a></li>
										<li><a href="#" className="button fit small">Fit + Small</a></li>
									</ul>
									<ul className="actions">
										<li><a href="#" className="button icon solid fa-download">Icon</a></li>
										<li><a href="#" className="button icon solid fa-upload">Icon</a></li>
										<li><a href="#" className="button icon solid fa-save">Icon</a></li>
									</ul>
									<ul className="actions">
										<li><span className="button disabled">Disabled</span></li>
										<li><span className="button disabled icon solid fa-download">Disabled</span></li>
									</ul>
								</section>

								<section>
									<h3>Form</h3>
									<form method="post" action="#">
										<div className="row gtr-uniform">
											<div className="col-6 col-12-xsmall">
												<input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
											</div>
											<div className="col-6 col-12-xsmall">
												<input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
											</div>
											<div className="col-12">
												<select name="demo-category" id="demo-category">
													<option value="">- Category -</option>
													<option value="1">Manufacturing</option>
													<option value="1">Shipping</option>
													<option value="1">Administration</option>
													<option value="1">Human Resources</option>
												</select>
											</div>
											<div className="col-4 col-12-small">
												<input type="radio" id="demo-priority-low" name="demo-priority" checked/>
												<label for="demo-priority-low">Low</label>
											</div>
											<div className="col-4 col-12-small">
												<input type="radio" id="demo-priority-normal" name="demo-priority"/>
												<label for="demo-priority-normal">Normal</label>
											</div>
											<div className="col-4 col-12-small">
												<input type="radio" id="demo-priority-high" name="demo-priority"/>
												<label for="demo-priority-high">High</label>
											</div>
											<div className="col-6 col-12-small">
												<input type="checkbox" id="demo-copy" name="demo-copy"/>
												<label for="demo-copy">Email me a copy</label>
											</div>
											<div className="col-6 col-12-small">
												<input type="checkbox" id="demo-human" name="demo-human" checked/>
												<label for="demo-human">Not a robot</label>
											</div>
											<div className="col-12">
												<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
											</div>
											<div className="col-12">
												<ul className="actions">
													<li><input type="submit" value="Send Message" /></li>
													<li><input type="reset" value="Reset" /></li>
												</ul>
											</div>
										</div>
									</form>
								</section>

								<section>
									<h3>Image</h3>
									<h4>Fit</h4>
									<div className="box alt">
										<div className="row gtr-uniform">
											<div className="col-12"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
											<div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
											<div className="col-4"><span className="image fit"><img src="images/pic05.jpg" alt="" /></span></div>
											<div className="col-4"><span className="image fit"><img src="images/pic06.jpg" alt="" /></span></div>
											<div className="col-4"><span className="image fit"><img src="images/pic06.jpg" alt="" /></span></div>
											<div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
											<div className="col-4"><span className="image fit"><img src="images/pic05.jpg" alt="" /></span></div>
											<div className="col-4"><span className="image fit"><img src="images/pic05.jpg" alt="" /></span></div>
											<div className="col-4"><span className="image fit"><img src="images/pic06.jpg" alt="" /></span></div>
											<div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
										</div>
									</div>
									<h4>Left &amp; Right</h4>
									<p><span className="image left"><img src="images/pic07.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
									<p><span className="image right"><img src="images/pic04.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
								</section>

							</article>
    )
}


export default PostElement