const menuButton=document.getElementById('menuBtn');
    const nav=document.getElementById('primaryNav');
    menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu');});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu');}));
    const header=document.getElementById('siteHeader');
    window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>25),{passive:true});
    document.getElementById('copyrightYear').textContent=new Date().getFullYear();
    document.getElementById('inquiryForm').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget);const name=String(data.get('name')||'').trim(),email=String(data.get('email')||'').trim(),company=String(data.get('company')||'').trim(),message=String(data.get('message')||'').trim();if(!name||!email||!message)return;const subject='Website inquiry - '+(company||name);const body=`Name: ${name}\nEmail: ${email}\nCompany / vessel: ${company||'Not specified'}\n\nMessage:\n${message}`;window.location.href='mailto:operations@atshipservices.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);});
