import React  from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { Carousel } from 'react-bootstrap';
function Home() {

  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img src="https://smartbooks.ph/img/smart-books-logo-svg.svg" alt=" " className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#trending">trending</Nav.Link>
            <Nav.Link href="#THRILLERS">thrillers</Nav.Link>
            <Nav.Link href="#New">New arrivals</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      <center>
     <Link to={`/product`}><button  className='pvrs'>Rentbooks</button> </Link>
     <Link to={`/pvs`}><button  className='pvrs'>BuyBooks</button> </Link> 
      <Link to="/cart">
        <button className='pvrs'>Cart</button>
      </Link> 
	  <Link to={`/logout`}  ><button className='pvrs'>logOut</button> </Link>
      </center>
	  <Carousel style={{marginTop:"10px"}}>
      <Carousel.Item>
        <img className="d-block w-100" src="1.jpg" alt="First slide" />
      </Carousel.Item>
    </Carousel>
<center><h3 style={{color:"black"}} id='trending'> trending</h3></center>
      {/* Flip Cards */}
      <div className="container-fluid"  style={{marginTop:"20px"}}>
        <div className="row">
          <div className="col-md-2">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="4.jpg"
                    alt="Teacher Avatar"
                    className="img"
                  />
                </div>
                <div className="flip-card-back">
                  <h3  style={{textAlign:"start" }}>About the author</h3>
                  <p>Lucy Atkins</p>
                  <p style={{fontSize:"9px",padding:"2px",fontFamily:"",fontStyle:"italic"}}>Lucy Atkins is an award-winning author and journalist. Her last novel, MAGPIE LANE, a literary mystery set in an Oxford College, was chosen as a Book of the Year by the Guardian, The Telegraph, Good Housekeeping magazine and Radio 4's Open Book. Lucy's third novel The Night Visitor, has been optioned for television, Her new novel, Windmill Hill has been described as 'a triumph' by Philip Pullman.

                Lucy is a Tutor on the Creative Writing Masters degree at Oxford University. She is a book critic for The Sunday Times and other publications. She has also written several non-fiction books, including the Amazon #1 parenting bestseller
                 </p>
                </div>
              </div>
            </div>
          </div>
           <div className="col-md-2">
           <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="5.jpg"
                    alt="Teacher Avatar"
                    className="img"
                  />
                </div>
                <div className="flip-card-back">
                <h3  style={{textAlign:"start" }}>About the author</h3>
                  <p>Sabine Durrant</p>
                  <p style={{fontSize:"9px",padding:"2px",fontFamily:"",fontStyle:"italic"}}>Sabine Durrant is an award-winning author and journalist. Her last novel, MAGPIE LANE, a literary mystery set in an Oxford College, was chosen as a Book of the Year by the Guardian, The Telegraph, Good Housekeeping magazine and Radio 4's Open Book. Lucy's third novel The Night Visitor, has been optioned for television, Her new novel, Windmill Hill has been described as 'a triumph' by Philip Pullman.

                Lucy is a Tutor on the Creative Writing Masters degree at Oxford University. She is a book critic for The Sunday Times and other publications. She has also written several non-fiction books, including the Amazon #1 parenting bestseller
                 </p>
                </div>
              </div>
            </div>
            </div> 
          <div className="col-md-2">
          <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668501684i/61991782.jpg"
                    alt="Teacher Avatar"
                    className="img"
                  />
                </div>
                <div className="flip-card-back">
                <h3  style={{textAlign:"start" }}>About the author</h3>

                <p>Louise Candlish</p>
                  <p style={{fontSize:"9px",padding:"2px",fontFamily:"",fontStyle:"italic"}}>Louise Candlish is an award-winning author and journalist. Her last novel, MAGPIE LANE, a literary mystery set in an Oxford College, was chosen as a Book of the Year by the Guardian, The Telegraph, Good Housekeeping magazine and Radio 4's Open Book. Lucy's third novel The Night Visitor, has been optioned for television, Her new novel, Windmill Hill has been described as 'a triumph' by Philip Pullman.

                Lucy is a Tutor on the Creative Writing Masters degree at Oxford University. She is a book critic for The Sunday Times and other publications. She has also written several non-fiction books, including the Amazon #1 parenting bestseller
                 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
          <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677602052i/61653290.jpg"
                    alt="Teacher Avatar"
                    className="img"
                  />
                </div>
                <div className="flip-card-back">
                <h3  style={{textAlign:"start" }}>About the author</h3>

                <p>T.M. Logan</p>
                  <p style={{fontSize:"9px",padding:"2px",fontFamily:"",fontStyle:"italic"}}>T.M. Loganis an award-winning author and journalist. Her last novel, MAGPIE LANE, a literary mystery set in an Oxford College, was chosen as a Book of the Year by the Guardian, The Telegraph, Good Housekeeping magazine and Radio 4's Open Book. Lucy's third novel The Night Visitor, has been optioned for television, Her new novel, Windmill Hill has been described as 'a triumph' by Philip Pullman.

                Lucy is a Tutor on the Creative Writing Masters degree at Oxford University. She is a book critic for The Sunday Times and other publications. She has also written several non-fiction books, including the Amazon #1 parenting bestseller
                 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
          <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677854695i/62549616.jpg"
                    alt="Teacher Avatar"
                    className="img"
                  />
                </div>
                <div className="flip-card-back">
                <h3  style={{textAlign:"start" }}>About the author</h3>
                <p>Claire Douglas</p>
                  <p style={{fontSize:"9px",padding:"2px",fontFamily:"",fontStyle:"italic"}}>Claire Douglas is an award-winning author and journalist. Her last novel, MAGPIE LANE, a literary mystery set in an Oxford College, was chosen as a Book of the Year by the Guardian, The Telegraph, Good Housekeeping magazine and Radio 4's Open Book. Lucy's third novel The Night Visitor, has been optioned for television, Her new novel, Windmill Hill has been described as 'a triumph' by Philip Pullman.

                Lucy is a Tutor on the Creative Writing Masters degree at Oxford University. She is a book critic for The Sunday Times and other publications. She has also written several non-fiction books, including the Amazon #1 parenting bestseller
                 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1662421425i/62296522.jpg"
                    alt="Teacher Avatar"
                    className="img"
                  />
                </div>
                <div className="flip-card-back">
                <h3  style={{textAlign:"start" }}>About the author</h3>

                <p>Helen Cooper</p>
                  <p style={{fontSize:"9px",padding:"2px",fontFamily:"",fontStyle:"italic"}}>Helen Cooper is an award-winning author and journalist. Her last novel, MAGPIE LANE, a literary mystery set in an Oxford College, was chosen as a Book of the Year by the Guardian, The Telegraph, Good Housekeeping magazine and Radio 4's Open Book. Lucy's third novel The Night Visitor, has been optioned for television, Her new novel, Windmill Hill has been described as 'a triumph' by Philip Pullman.

                Lucy is a Tutor on the Creative Writing Masters degree at Oxford University. She is a book critic for The Sunday Times and other publications. She has also written several non-fiction books, including the Amazon #1 parenting bestseller
                 </p>
                </div>
            </div>
            </div>
        </div>
        </div>
      </div>
      {/* cardhover */}
      <section class="dark" id='THRILLERS' style={{marginTop:"20px"}}>
	<div class="container py-4">
		<center> <h1>Thrillers</h1></center>
		<article class="postcard dark blue">
			<a class="postcard__img_link" href="# ">
				<img class="postcard__img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668422446i/63267634.jpg" alt="" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title blue"><a href="  ">Nikki Smith </a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>THE BEACH PARTY will be published by Viking in July 2023.
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Nikki Smith studied English Literature at Birmingham University, before pursuing a career in finance. Following a ‘now or never’ moment, she applied for a Curtis Brown Creative course where she started writing her debut novel ALL IN HER HEAD which was published in April 2020. Her second novel, LOOK WHAT YOU MADE ME DO was published in April 2021 and both books have been optioned for TV.

				THE BEACH PARTY will be published by Viking in July 2023.

				Nikki lives near Guildford with her family and a cat who thinks she’s a dog.

				You can find out more about her on her website www.nikkismithauthor.com & she's active on twitter as @mrssmithmunday</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>The Beach Party</li>
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>publish July 2023 </li>
                    <button style={{borderRadius:"20px",height:"50px", width:"150px", marginTop:"30px" }}>view more</button>

				</ul>
			</div>
		</article>
		<article class="postcard dark red">
			<a class="postcard__img_link" href="# ">
				<img class="postcard__img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388365513i/359194.jpg" alt=" " />	
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title red"><a href="#  ">The Lucifer Effect: Understanding How Good People Turn Evil</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>First published April 17, 2007
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">The definitive firsthand account of the groundbreaking research of Philip Zimbardo—the basis for the award-winning film The Stanford Prison Experiment

					Renowned social psychologist and creator of the Stanford Prison Experiment Philip Zimbardo explores the mechanisms that make good people do bad things, how moral people can be seduced into acting immorally, and what this says about the line separating good from evil.

					The Lucifer Effect explains how—and the myriad reasons why—we are all susceptible to the lure of “the dark side.” Drawing on examples from history as well as his own trailblazing research, Zimbardo details how situational forces and group dynamics can work in concert to make monsters out of decent men and women.</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Philip G. Zimbardo</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i> April 17, 2007</li>
                    <button style={{borderRadius:"20px",height:"50px", width:"150px", marginTop:"30px" }}>view more</button>
				</ul>
			</div>
		</article>
		<article class="postcard dark green">
			<a class="postcard__img_link" href="# " >
				<img class="postcard__img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635228139i/59452764.jpg" alt="" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title green"><a href="# ">The Pin Nose Man</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Format	20 pages Published	Short Box
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">"Around the corner, in this room
				The cupboard where you keep the broom
				Just beyond where you can see
				Or maybe where you eat your tea
				At school, yep he could be there too
				The man might have his eyes on you.
				Any way you get it, it rhymes. It's a rhyming horror story."</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Isaac Lenkiewicz</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>20 pages</li>
                    <button style={{borderRadius:"20px",height:"50px", width:"150px", marginTop:"30px" }}>view more</button>
				</ul>
			</div>
		</article>
		<article class="postcard dark yellow">
			<a class="postcard__img_link" href="# ">
				<img class="postcard__img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1611711277i/55200330.jpg" alt="" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title yellow"><a href="# ">A Deadly Influence</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>First published April 1, 2021
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">A Deadly Influence studied English Literature at Birmingham University, before pursuing a career in finance. Following a ‘now or never’ moment, she applied for a Curtis Brown Creative course where she started writing her debut novel ALL IN HER HEAD which was published in April 2020. Her second novel, LOOK WHAT YOU MADE ME DO was published in April 2021 and both books have been optioned for TV.

				THE BEACH PARTY will be published by Viking in July 2023.

				Nikki lives near Guildford with her family and a cat who thinks she’s a dog.

				You can find out more about her on her website www.nikkismithauthor.com & she's active on twitter as @mrssmithmunday</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Mike Omer</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i> April 1, 2021</li>
                    <button style={{borderRadius:"20px",height:"50px", width:"150px", marginTop:"30px" }}>view more</button>
				</ul>
			</div>
		</article>
	</div>
</section>
<section class="light" id='New'>
	<div class="container py-2">
		<center> <h1 style={{color:"black"}}>New Arrivals</h1></center>
		<div class="h1 text-center text-dark" id="pageHeaderTitle"></div>

		<article class="postcard light blue">
			<a class="postcard__img_link" href="# ">
				<img class="postcard__img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680459872i/20170404.jpg" alt="" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title blue"><a href="# ">Station Eleven</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2023
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Nikki Smith studied English Literature at Birmingham University, before pursuing a career in finance. Following a ‘now or never’ moment, she applied for a Curtis Brown Creative course where she started writing her debut novel ALL IN HER HEAD which was published in April 2020. Her second novel, LOOK WHAT YOU MADE ME DO was published in April 2021 and both books have been optioned for TV.

					THE BEACH PARTY will be published by Viking in July 2023.

					Nikki lives near Guildford with her family and a cat who thinks she’s a dog.

					You can find out more about her on her website www.nikkismithauthor.com & she's active on twitter as @mrssmithmunday</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Emily St. John Mandel</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i> May 25th 2023</li>
                    <button style={{borderRadius:"20px",height:"50px", width:"150px", marginTop:"30px", backgroundColor:"black", color:"white" }}>view more</button>
				</ul>
			</div>
		</article>
		<article class="postcard light red">
			<a class="postcard__img_link" href="# ">
				<img class="postcard__img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677361825i/57945316.jpg" alt="" />	
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title red"><a href="# ">Babel</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 28th 2023
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Nikki Smith studied English Literature at Birmingham University, before pursuing a career in finance. Following a ‘now or never’ moment, she applied for a Curtis Brown Creative course where she started writing her debut novel ALL IN HER HEAD which was published in April 2020. Her second novel, LOOK WHAT YOU MADE ME DO was published in April 2021 and both books have been optioned for TV.

				THE BEACH PARTY will be published by Viking in July 2023.

				Nikki lives near Guildford with her family and a cat who thinks she’s a dog.

				You can find out more about her on her website www.nikkismithauthor.com & she's active on twitter as @mrssmithmunday</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>  R.F. Kuang</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i> May 28th 2023</li>
                    <button style={{borderRadius:"20px",height:"50px", width:"150px", marginTop:"30px",backgroundColor:"black", color:"white" }}>view more</button>
				</ul>
			</div>
		</article>
		<article class="postcard light green">
			<a class="postcard__img_link" href="# ">
				<img class="postcard__img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654581271i/61242426.jpg" alt="" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title green"><a href="# ">Legends & Lattes</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, Aug 25th 2023
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Nikki Smith studied English Literature at Birmingham University, before pursuing a career in finance. Following a ‘now or never’ moment, she applied for a Curtis Brown Creative course where she started writing her debut novel ALL IN HER HEAD which was published in April 2020. Her second novel, LOOK WHAT YOU MADE ME DO was published in April 2021 and both books have been optioned for TV.

					THE BEACH PARTY will be published by Viking in July 2023.

					Nikki lives near Guildford with her family and a cat who thinks she’s a dog.

					You can find out more about her on her website www.nikkismithauthor.com & she's active on twitter as @mrssmithmunday</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Travis Baldree</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>Aug 25th 2023</li>
                    <button style={{borderRadius:"20px",height:"50px", width:"150px", marginTop:"30px",backgroundColor:"black", color:"white" }}>view more</button>
					
				</ul>
			</div>
		</article>
		<article class="postcard light yellow">
			<a class="postcard__img_link" href="# ">
				<img class="postcard__img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663869260i/61294937.jpg" alt="" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title yellow"><a href="# ">Nettle & Bone</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2023
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Nikki Smith studied English Literature at Birmingham University, before pursuing a career in finance. Following a ‘now or never’ moment, she applied for a Curtis Brown Creative course where she started writing her debut novel ALL IN HER HEAD which was published in April 2020. Her second novel, LOOK WHAT YOU MADE ME DO was published in April 2021 and both books have been optioned for TV.

				THE BEACH PARTY will be published by Viking in July 2023.

				Nikki lives near Guildford with her family and a cat who thinks she’s a dog.

				You can find out more about her on her website www.nikkismithauthor.com & she's active on twitter as @mrssmithmunday</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>T. Kingfisher</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i> May 25th 2023</li>
                    <button style={{borderRadius:"20px",height:"50px", width:"150px", marginTop:"30px",backgroundColor:"black", color:"white" }}>view more</button>
					
				</ul>
			</div>
		</article>
	</div>
</section>
<div class="container" style={{backgroundColor:"black", marginTop:"0px"}}>
	<div class="row">
		<div class="col-md-3">
			<h5 style={{marginTop:"50px"}}>About</h5>
			<p>we always try to give our best quality guidence for our all volunteers so they will successfully work together.</p>
			<i class="fa-brands fa-facebook" style={{color: "#085ae7;"}}></i>
			<i class="fa-brands fa-twitter" style={{color: "#326bcd;"}}></i>
			<i class="fa-brands fa-linkedin" style={{color: "#4275cd;"}}></i>
			<i class="fa-brands fa-google" style={{color: "#246deb;"}}></i>
		</div>
		<div class="col-md-3">
			<h5 style={{marginTop:"50px"}}>insurance Policy</h5>
			<p>Health insurance <br/> Life insurance <br/> Bussiness insurance<br/> Accident insurance<br/> Car insurance</p>
		</div>
		<div class="col-md-3">
			<h5 style={{marginTop:"50px"}}> Support</h5>
			<p>Documentation <br/>product<br/> reporting issue <br/> Terms & conditions <br/>pravicy policy</p>
		</div>
		<div class="col-md-3">
			<h5 style={{marginTop:"50px"}}>Contact info</h5>
			<i class="fa-solid fa-location-dot" style={{color: "#3b64ab"}}></i>
			<span>477 Hartland Avenue,<br/>Neosho,Wl 53059</span>
			<br/>
			<i class="fa-solid fa-envelope" style={{color: "#215bc0;"}}></i>
			<span>insurance@gmail.com</span>
			<br/>
			<i class="fa-solid fa-phone" style={{color: "#3e74d0;"}}></i>
			<span>+983-578961588</span>
		</div>
	</div>
    </div>
      
    </>
  );
}

export default Home;
