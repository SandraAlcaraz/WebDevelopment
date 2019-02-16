package main
import(
	"fmt" //library for Print
  "net/http"
	"time"
)

func responder(respuesta http.ResponseWriter, solicitud *http.Request){
	//fmt.Println("hello, world")
	t := time.Now()
	fmt.Fprintf(respuesta,(t.Format(time.RFC850)))
}
func mostrarHtml(respuesta http.ResponseWriter,solicitud *http.Request){

	http.ServeFile(respuesta,solicitud,"arreglo.html")

}




func mostrarArreglo(respuesta http.ResponseWriter,solicitud *http.Request){
	var a [2]string
	a[0] = "jueves"
	a[1] = "viernes"
	//http.ServeFile(respuesta,solicitud,a[0])
	fmt.Fprintf(respuesta,a[1])

}




func main() {
	//fmt.Printf("hello, world\n")
	http.HandleFunc("/ajax",mostrarHtml)

	http.HandleFunc("/arreglo",mostrarArreglo)
	http.ListenAndServe(":8080", nil )
}


//go run file to compile and ejecutar
//go build to compile the file