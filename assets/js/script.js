// nav responsive function
const headerShowMenu = document.querySelector('.showNavMenu');
const headerNav = document.querySelector('header nav');

headerShowMenu.addEventListener('click', ()=>{
    const headerNavId = headerNav.getAttribute('data-id').trim();
    if (headerNavId === '1') {
        headerNav.setAttribute('data-id', '0');
        headerNav.style.top = '80px';
        headerShowMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        headerShowMenu.style.transform = 'rotate(180deg)';
    } else{
        headerNav.setAttribute('data-id', '1');
        headerNav.style.top = '-400px';
        headerShowMenu.innerHTML = '<i class="fa-sharp fa-solid fa-bars"></i>'
        headerShowMenu.style.transform = 'rotate(0deg)';
    }
})

// profile-img-click
const profileImgClick = header.querySelector('.profile-img');
const profileOptions = document.querySelector('.profile-options');
const hideProfile = profileOptions.querySelector('.hide-profile');

profileImgClick.addEventListener('click', ()=>{
    profileOptions.classList.remove('hideProfileOption');
})
hideProfile.addEventListener('click', ()=>{
    profileOptions.classList.add('hideProfileOption');
})

const modeBtnsCon = document.querySelector(".mode-btn");
const modeBtns = modeBtnsCon.querySelectorAll("button");

modeBtns.forEach(modeBtn =>{
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");

    // Function to apply the system theme
    function applySystemTheme() {
        if (systemPreference.matches) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }

    // Event listener to detect system theme changes
    systemPreference.addEventListener("change", applySystemTheme); 
    
    // Mode Button attribute
    const modeBtnAttr = modeBtn.getAttribute('data-mode').trim();
    
    // Function to set the theme based on user selection
    function setTheme(mode) {
        if (mode === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else if (mode === "light") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        } else {
            applySystemTheme();
            localStorage.setItem("theme", "system");
        }
    }

    // Check local storage for saved theme on load
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme);

    modeBtn.classList.remove('activeDarkMode')
    modeBtn.classList.remove('activeLightMode')
    if (savedTheme === "dark") {
        if (modeBtnAttr === "dark") {
            modeBtn.classList.add("activeDarkMode");
        }
    } else if(savedTheme === "light"){
        if (modeBtnAttr === "light") {
            modeBtn.classList.add("activeLightMode")
        }
    }

    // Set theme based on button click
    modeBtn.addEventListener("click", (e) => {       
        const clickOne = e.target; 
        setTheme(modeBtnAttr);

        modeBtnsCon.querySelectorAll('button').forEach(modeBtn =>{
            modeBtn.classList.remove('activeDarkMode')
            modeBtn.classList.remove('activeLightMode')
        });


        if (modeBtnAttr === "dark" || modeBtnAttr === "auto-system") {
            clickOne.classList.add("activeDarkMode");
        } else if(modeBtnAttr === "light" || modeBtnAttr === "auto-system"){
            clickOne.classList.add("activeLightMode")
        }
    });
});


// Invoice service count
const invoiceServiceCounters = document.querySelectorAll(".invoice-services-col .invoice-services-text .invoice-service-count");
invoiceServiceCounters.forEach(counter =>{
    function updateCounter(){
        const target = +counter.getAttribute("data-target");
        const countedNum = +counter.textContent;
        const increment = target/120;

        if (countedNum < target) {
            counter.textContent = Math.ceil(countedNum + increment);
            setTimeout(updateCounter, 200);
        } else{
            counter.textContent = target;
        }
    }
    updateCounter();
})


// Invoice-popular filtering
const invoicePopularParentCon = document.querySelector('.invoice-popular-filtering-con');
const invoiceFilteringBtns = invoicePopularParentCon.querySelectorAll('button');

invoiceFilteringBtns.forEach(invoiceFilteringBtn =>{
    invoiceFilteringBtn.addEventListener('click', ()=>{
        const invoiceBtnCategory = invoiceFilteringBtn.getAttribute('data-category').trim();
        const invoiceDesignRow  = document.querySelector('.invoice-design-row');
        const invoiceDesignsCols = invoiceDesignRow.querySelectorAll('.invoice-design-col');
        invoiceDesignsCols.forEach(designCol => {
            if (invoiceBtnCategory === 'see-all' || designCol.classList.contains(invoiceBtnCategory)){
                designCol.style.display = 'block';
            } else {
                designCol.style.display = 'none';
            }
        })
        // filtering active
        invoicePopularParentCon.querySelectorAll('button').forEach(invoiceFilteringBtn =>invoiceFilteringBtn.classList.remove('invoice-popular-designs-btn-active'));
        invoiceFilteringBtn.classList.add('invoice-popular-designs-btn-active');
    })
})

// trending invoice hover effects
const trendingInvoiceRow = document.querySelector('.trending-invoice-row');
const nextTrendingInvoiceBtn = trendingInvoiceRow.querySelector('.next-trending-invoice');
const prevTrendingInvoiceBtn = trendingInvoiceRow.querySelector('.prev-trending-invoice');
const trendingInvoiceCols = [...trendingInvoiceRow.querySelectorAll('.trending-invoice-col')];

trendingInvoiceRow.addEventListener('mouseenter', ()=>{
    prevTrendingInvoiceBtn.style.left = '20px';
    nextTrendingInvoiceBtn.style.right = '20px';
})

trendingInvoiceRow.addEventListener('mouseleave', () => {
    prevTrendingInvoiceBtn.style.left = '-100px';
    nextTrendingInvoiceBtn.style.right = '-100px';
});


// Back to the Top function
let backToTopReach = 800;
window.addEventListener('scroll', ()=>{
    const scrolling  = window.scrollY
    const backToTopBtn = document.querySelector('.back-to-top');

    if (scrolling >= backToTopReach) {
        backToTopBtn.style.visibility = 'visible'        
    }else{
        backToTopBtn.style.visibility = 'hidden'
    }

})


// Footer-lang-select click function
const footerLangSelect = document.querySelector('footer .footer-lang-select');
const footerDropDown = document.querySelector('footer .footer-drop-down');

footerLangSelect.addEventListener('click', (e)=>{
    e.preventDefault();    
   
    if (footerDropDown.classList.contains('hidden-footer-drop-down')) {
        footerDropDown.classList.remove('hidden-footer-drop-down');
        footerLangSelect.style.color = 'var(--lightBlueShade)';
    }else{
        footerDropDown.classList.add('hidden-footer-drop-down');
        footerLangSelect.style.color = 'var(--darkgray)';
    }
})

