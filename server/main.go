package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
)

func mainHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Client IP: %s, Method: %s, URL: %s, User-Agent: %s",
		r.RemoteAddr, r.Method, r.URL.Path, r.UserAgent())

	w.Header().Set("Content-Type", "text/html")
	html := "<!DOCTYPE html><html><head><title>Garrett O'Hara</title></head><body><p>hello world</p></body></html>"
	if _, err := w.Write([]byte(html)); err != nil {
		log.Printf("Error writing response: %v", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
	}
}

func faviconHandler(w http.ResponseWriter, r *http.Request) {
	// Return a 204 No Content response for favicon requests
	w.WriteHeader(http.StatusNoContent)
}

func main() {
	portno := flag.Int("p", 8080, "Specify the port number to use")
	flag.Parse()
	http.HandleFunc("/", mainHandler)
	http.HandleFunc("/favicon.ico", faviconHandler)

	fmt.Printf("Starting server on port %d...\n", *portno)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", *portno), nil))
}
