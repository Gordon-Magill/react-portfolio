export default function emailValidator(email){
    return !!email.match(/^.+@.+\.(com|org|net|edu|gov)$/)
}