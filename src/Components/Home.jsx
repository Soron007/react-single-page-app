import vg from '../assets/2.webp';
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'

import React from 'react'

const Home = () => {
    return (
        <>
            <div className='home' id='home'>

                <main>
                    <h1>Tech==Splurge</h1>
                    <p>We mitigate all your deep rooted tech issues</p>

                </main>


            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>
                        We solve you tech problems promptly and with us
                        you will find a one-stop platform that will serve
                        all your tech needs. In short, problem-solving is our
                        our sleep, breakfast, lunch and dinner.


                    </p>
                </div>
            </div>

            <div className="home3" id='about'>

                <div>
                    <h1>Who are we?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum nesciunt sunt cupiditate, debitis voluptas similique omnis nihil, facere error nisi id facilis alias ut dolorum velit? Omnis voluptate dolore fugit ad iste deserunt quos saepe. Unde blanditiis tempora, repellendus esse harum quod. Explicabo libero porro fugiat esse distinctio labore nam cupiditate sequi architecto cumque? Et fuga temporibus quam adipisci soluta velit ad sunt animi harum officiis ducimus quisquam iusto sequi rem repudiandae, similique consectetur eum, provident id voluptates totam tenetur odit mollitia. Ipsam, assumenda mollitia. Rerum voluptatibus esse facere cupiditate. Velit quaerat enim vel natus, excepturi alias distinctio libero!</p>
                </div>
            </div>


            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div style={{
                            animationDelay: "0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay: "0.8s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>




        </>
    )
}

export default Home
