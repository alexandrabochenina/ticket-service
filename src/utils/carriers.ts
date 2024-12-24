export function getCarrier(carrier: string) {
    switch (carrier) {
        case 'TK':
            return 'https://globalooh.net/wp-content/uploads/2019/05/turkish-airlines-logo.png'
        
        case 'S7':
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/2560px-S7_new_logo.svg.png'

        case 'SU':
            return 'https://dwglogo.com/wp-content/uploads/2017/12/Aeroflot_logo.png'

        case 'BA':
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkrHp1xK4Ehd0b6xWa5ZnNdZOupeGX4kdTQ&s'

        default:
            return 'https://assets.turbologo.ru/blog/ru/2018/12/18170458/no-logo.png'
    }
}