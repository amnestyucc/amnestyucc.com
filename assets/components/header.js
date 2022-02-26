class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav-extended">
                <div class="navmod nav-wrapper" style="min-height: 80px;">
                    <a href="index.html" class="logomod brand-logo"
                        style="color: black; font-size: 34px; font-family: 'Playfair Display', serif; letter-spacing: 0.05em;  margin-left: 5%;">AMNESTY
                        UCC</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down" style=" margin-right: 7%;">
                        <li><a href="about.html"
                                style="color: black; height: 80px; width: 120px; text-align: center; padding-top: 10px; font-size: 20px; text-decoration: underline;">About</a>
                        </li>
                        <li><a href="publications.html"
                                style="color: black; height: 80px; width: 160px; text-align: center; padding-top: 10px; font-size: 20px; text-decoration: underline;">Publications</a>
                        </li>
                        <li><a href="trip2022.html"
                                style="color: black; height: 80px; width: 120px; text-align: center; padding-top: 10px; font-size: 20px; text-decoration: underline;">Trip</a>
                        </li>
                        <li><a href="https://www.instagram.com/ucc_amnesty/"
                                style="color: black; height: 80px; width: 120px; text-align: center; padding-top: 10px; font-size: 20px; text-decoration: underline;">Instagram</a>
                        </li>
                    </ul>
                </div>
            </nav>
            `;
    }
}
class HeaderInFolder extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav-extended">
                <div class="navmod nav-wrapper" style="min-height: 80px;">
                    <a href="/index.html" class="logomod brand-logo"
                        style="color: black; font-size: 34px; font-family: 'Playfair Display', serif; letter-spacing: 0.05em;  margin-left: 5%;">AMNESTY
                        UCC</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down" style=" margin-right: 7%;">
                        <li><a href="/about.html"
                                style="color: black; height: 80px; width: 120px; text-align: center; padding-top: 10px; font-size: 20px; text-decoration: underline;">About</a>
                        </li>
                        <li><a href="/publications.html"
                                style="color: black; height: 80px; width: 160px; text-align: center; padding-top: 10px; font-size: 20px; text-decoration: underline;">Publications</a>
                        </li>
                        <li><a href="/trip2022.html"
                                style="color: black; height: 80px; width: 120px; text-align: center; padding-top: 10px; font-size: 20px; text-decoration: underline;">Trip</a>
                        </li>
                        <li><a href="https://www.instagram.com/ucc_amnesty/"
                                style="color: black; height: 80px; width: 120px; text-align: center; padding-top: 10px; font-size: 20px; text-decoration: underline;">Instagram</a>
                        </li>
                    </ul>
                </div>
            </nav>
            `;
    }
}
