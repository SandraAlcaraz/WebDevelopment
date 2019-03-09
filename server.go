package main
import(
	"fmt" //library for Print
	"net/http"
)


func mostrarHtml(respuesta http.ResponseWriter,solicitud *http.Request){
	http.ServeFile(respuesta,solicitud,"Publico/index.html")

}




func main() {
  fs := http.FileServer(http.Dir("firstVersion"))
  http.Handle("/firstVersion/", http.StripPrefix("/firstVersion/", fs))

	fmt.Printf("hello, world\n")
	http.HandleFunc("/principal",mostrarHtml)
	http.ListenAndServe(":8080", nil )
}