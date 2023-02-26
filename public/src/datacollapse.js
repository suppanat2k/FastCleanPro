const head1 = document.getElementById('header1')
const head2 = document.getElementById('header2')
const head3 = document.getElementById('header3')

head1.addEventListener('click',()=>{
    document.getElementById('body1').classList.add('slideon')
    document.getElementById('body2').classList.remove('slideon2')
    document.getElementById('body3').classList.remove('slideon3')
})

head2.addEventListener('click',()=>{
    document.getElementById('body1').classList.remove('slideon')
    document.getElementById('body2').classList.add('slideon2')
    document.getElementById('body3').classList.remove('slideon3')
})

head3.addEventListener('click',()=>{
    document.getElementById('body1').classList.remove('slideon')
    document.getElementById('body2').classList.remove('slideon2')
    document.getElementById('body3').classList.add('slideon3')
})