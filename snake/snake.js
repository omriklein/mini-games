
R=a=>Math.random()*a|0
w=20,h=20,W=w+2,d=1,G=0
s=[1+(w>>1)+((h>>1)+1)*W]
S = new Set(s)
for(i=0;i<W*(h+2);i++)(i/W<1||i/W>h||i%W<1||i%W>w)&&S.add(i)

(F=() => {
    while(S.has(f = R(w)+1 + (R(h)+1)*W));
})()

(D=()=>{
    t = "<table>"
    for(i = W+1; i < W*(h+1); i++)
        t += (k=i%W)==0 ? '<tr>' : k==W-1 ? '' : `<th width=20 height=20 bgcolor='${S.has(i)?'blue':i==f?'red':'green'}'>`
    document.body.innerHTML = t + (G ? "GAME OVER" : "")
})()

I=setInterval(() => {
    G && clearInterval(I)
    n = s[0] + d
    if(S.has(n)) { G = 1; D(); return }
    s.unshift(n), S.add(n)
    if(n != f) S.delete(s.pop())
    else F()
    D()
},300)

window.addEventListener("keydown", e => {
    d={"ArrowUp": -W, "ArrowDown": W, "ArrowLeft": -1, "ArrowRight": 1}[e.key]??d
})