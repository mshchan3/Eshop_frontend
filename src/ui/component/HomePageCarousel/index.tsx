import {Carousel, Container} from "react-bootstrap";
import React from "react";
import './style.css'

export default function HomePageCarousel() {
    return (
        <Container className="mt-3 mb-2">
            <Carousel fade className={"carousel"}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.nike.com.hk/resources/template/kvFullNewModule3/36949292207752922.jpg"
                        alt="First slide"
                    />
                    {/*<Carousel.Caption>*/}
                    {/*    <h3>First slide label</h3>*/}
                    {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://jdsportsblog.s3.amazonaws.com/wp-content/uploads/2021/11/Desktop_Top_Banner_1920x840.jpg"
                        alt="Second slide"
                    />

                    {/*<Carousel.Caption>*/}
                    {/*    <h3>Second slide label</h3>*/}
                    {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.ourdailydose.net/media/odd-images/web_banner_ADIDAS_YEEZY_SLIDE_ONYX_BONE.jpg"
                        alt="Third slide"
                    />

                    {/*<Carousel.Caption>*/}
                    {/*    <h3>Third slide label</h3>*/}
                    {/*    <p>*/}
                    {/*        Praesent commodo cursus magna, vel scelerisque nisl consectetur.*/}
                    {/*    </p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}