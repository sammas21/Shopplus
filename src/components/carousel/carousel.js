import React from 'react'

function Carousel() {
    return (
        <section class="row">
            <div class="col-12 p-0">
                <div id="carouselHome" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active carousel-item-left">
                        <img class="w-100 d-none d-md-block" src="images/banner.jpg" alt="First slide"/>
                        <img class="w-100 d-block d-md-none " src="images/mobile-banner.jpg" alt="First slide"/>
                    </div>
                    <div class="carousel-item carousel-item-next carousel-item-left">
                        <img class="w-100 d-none d-md-block" src="images/banner.jpg" alt="First slide"/>
                        <img class="w-100 d-block d-md-none" src="images/mobile-banner.jpg" alt="First slide"/>
                    </div>
                    </div>

                    <a class="carousel-control-prev" href="#carouselHome" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselHome" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Carousel
