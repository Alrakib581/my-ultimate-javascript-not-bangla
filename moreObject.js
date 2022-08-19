const nayok = {
    name: 'shakib khan',
    id:121,
    address:'move cinema',
    isSingle:true,
    friends:['apu', 'Raz', 'salman'],
    movies:[{name:'no.1 skib khan', year: 2015,},{name:'kink khan', year:2018}],
    act: function(){
        console.log('great acting capability')
    },
    car:{
        brand:'Tesla',
        price:500000,
        made:2023,
        manufacturer:{
            name:'Tesla',
            ceo:'Elon Mask',
            country:'USA'
        }

    }
}
// console.log(nayok);
nayok.act();