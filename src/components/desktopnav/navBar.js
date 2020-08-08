import React from 'react'

function NavBar() {
    return (
        <nav class="desktopNav row border-bottom bg-white">
      <div class="container">
      <ul>
        <li class="dropdown spriteMenu">
          <a href="#" class="dropdown-toggle" id="apparel-accessories-Dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <figure>
              <img src="images/nav-icon/apparels.png" alt="Apparel &amp; Accessories"/>
              <figcaption>Apparel &amp;<br/> Accessories</figcaption>
            </figure>
          </a>
          <div class="dropdown-menu" aria-labelledby="apparel-accessories-Dropdown">
            <a class="dropdown-item" href="#">Allen Solly</a>
            <a class="dropdown-item" href="#">Armani Exchange</a>
            <a class="dropdown-item" href="#">Arrow</a>
            <a class="dropdown-item" href="#">Aurelia</a>
            <a class="dropdown-item" href="#">Bata</a>
            <a class="dropdown-item" href="#">Benetton</a>
            <a class="dropdown-item" href="#">BIBA</a>
            <a class="dropdown-item" href="#">Bobbi Brown</a>
            <a class="dropdown-item" href="#">Brand Factory</a>
            <a class="dropdown-item" href="#">Celio</a>
            <a class="dropdown-item" href="#">Central</a>
            <a class="dropdown-item" href="#">Coach</a>
            <a class="dropdown-item" href="#">Euphoria Jewellery (TM) gold coins</a>
            <a class="dropdown-item" href="#">Fastrack</a>
            <a class="dropdown-item" href="#">FBB</a>
            <a class="dropdown-item" href="#">Flying Machine</a>
            <a class="dropdown-item" href="#">G - Star Raw</a>
          </div>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src="images/nav-icon/food-bav.png" alt="Food &amp; Beverage"/>
              <figcaption>Food &amp;<br/> Beverage</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src="images/nav-icon/grocery.png" alt="Grocery &amp; Home Needs"/>
              <figcaption>Grocery &amp;<br/> Home Needs</figcaption>
            </figure>
          </a>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" id="MobileElectronics-Dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <figure>
              <img src="images/nav-icon/electronics.png" alt="Mobile &amp; Electronics"/>
              <figcaption>Mobile &amp;<br/> Electronics</figcaption>
            </figure>
          </a>
          <div class="dropdown-menu" aria-labelledby="MobileElectronics-Dropdown">
            <a class="dropdown-item" href="#">Croma</a>
            <a class="dropdown-item" href="#">Mobile Recharge</a>
          </div>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src="images/nav-icon/health-wellness.png" alt="Health &amp; Wellness"/>
              <figcaption>Health &amp;<br/> Wellness</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src="images/nav-icon/ecom-online.png" alt="e-Com &amp; Online"/>
              <figcaption>e-Com &amp;<br/> Online</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src="images/nav-icon/entertainment.png" alt="Grocery &amp; Home Needs"/>
              <figcaption>Entertainment &amp;<br/> Magazines</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src="images/nav-icon/cab.png" alt="Cabs &amp; Travel"/>
              <figcaption>Cabs &amp;<br/> Travel</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src="images/nav-icon/all.png" alt="all"/>
              <figcaption>All<br/> Brands</figcaption>
            </figure>
          </a>
        </li>
      </ul>
      </div>
    </nav>
    )
}

export default NavBar
