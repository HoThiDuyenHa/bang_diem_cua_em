
function myFunction(){
    var se1=parseFloat(document.getElementById('se1').value);
    var se2=parseFloat(document.getElementById('se2').value);
    var year=parseInt(document.getElementById('year').value);
    // var kq;
    var sum;
    var xl;
    switch(year){
        case 1:
            sum=(se1+se2)/2;
            sum=parseFloat(sum);
            document.getElementById('kq').value=sum;
            break;
        case 2:
            sum=(se1+se2)/3;
            sum=parseFloat(sum);
            document.getElementById('kq').value=sum;
            break;
        case 3:
            sum=(se1+se2)/4;
            sum=parseFloat(sum);
            document.getElementById('kq').value=sum;
            break;
        default:
            alert("Invalid");
            return;

    }
    if(sum>=9){
        kq="Học sinh Xuất Sắc";
        document.getElementById('xl').style.color="red";
    }else if(  sum>=8){
        kq="Học sinh Giỏi";
        document.getElementById('xl').style.color="blue";     
    }else if(sum>=6){
        kq="Học sinh Khá";
        document.getElementById('xl').style.color="green";
    }else if(sum>=5){
        kq="Học sinh Trung Bình";
        document.getElementById('xl').style.color="black";
    }else{
        kq="Học sinh Yếu";
        document.getElementById('xl').style.color="yellow";
    }
    document.getElementById('xl').innerHTML=kq;
    
   
    }
function myFunction2(){
    document.getElementById('se1').value=" ";
    document.getElementById('se2').value=" ";
    document.getElementById('kq').value=" ";
    document.getElementById('xl').innerHTML=" ";
}   



