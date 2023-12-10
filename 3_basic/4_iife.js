
// Imdeiately Invovked Function Expression

(function DB(){
    console.log("DB connected");
})();

((Port) => {
    console.log(`DB connected on PORT ${Port}`);
})(3000)