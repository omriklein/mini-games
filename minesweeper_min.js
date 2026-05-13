c='',m="\u2738",N=8,B=7,b=[],n=[1,-1,M=N+2,-N-2,L=N+1,N+3,-N-1,-N-3],k=()=>(Math.random()*N|0)+1,l=[]
for(e=0;e<B;)if(b[p=k()*M+k()]!=m){b[p]=m,e++;for(o of n)b[x=p+o]!=m&&(b[x]=-~b[x])}
x=(i)=>{if(c||l[i]||i<M||i>L*M||(k=i%M)==0||k==L)return;l[i]=1;if(b[i]==m)c="LOSE";else{if(!b[i])for(o of n)if(!l[i+o])x(i+o);if(l.filter(a=>a).length==N*N-B)c="WINNER!"}r()}
r=()=>{s="<table>";for(i=N+3;i<L*M;i++){s+=(k=i%M)==0?'<tr>':k==L?'':`<th width=70 height=70 onclick="x(${i})"bgcolor="${l[i]?'#66B':'#666'}"style='font-size:50px'>${l[i]||(c&&b[i]==m)?b[i]??'':' '}</th>`};document.body.innerHTML=s+c}
r()