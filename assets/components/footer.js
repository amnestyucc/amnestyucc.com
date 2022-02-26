class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="footerself">
                <h1 style="font-size: 26px">UCC Amnesty International Club</h1>
                <h1 style="font-size: 18px; margin-top: 0px">Contact: <a
                        href="mailto:robbie.evans@ucc.on.ca">robbie.evans@ucc.on.ca</a></h1>
                <h1 style="font-size: 18px; margin-top: 10px">Website by Joshua Li and Ibrahim Fadel</h1>
                <h1 style="font-size: 18px; margin-top: 0px">&copy; 2022</h1>
            </div>
            `;
    }
}
