let month = prompt('Enter a month:')
switch (month) {
    case 'january' :
    case 'march' :
    case 'may' :
    case 'july' :
    case 'August' :
    case 'october' :
        console.log(month + ' has 31 days')
        break;
    case 'september' :
    case 'Apirl' :
    case 'june' :
    case 'november' :
        console.log(month + ' has 30 days')
        break;
    case 'febuary' :
        console.log(month + ' has 28 days')
        break;
    default:
        console.log('not a month')
        break;
}