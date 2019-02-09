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

	http.ServeFile(respuesta,solicitud,"ajax.html")

}


func mostrarTexto(respuesta http.ResponseWriter,solicitud *http.Request){

	http.ServeFile(respuesta,solicitud,"nojson.txt")

}




func main() {
	//fmt.Printf("hello, world\n")
	http.HandleFunc("/ajax",mostrarHtml)
	http.HandleFunc("/archivo",mostrarTexto)

	http.ListenAndServe(":8080", nil )
}


//go run file to compile and ejecutar
//go build to compile the file