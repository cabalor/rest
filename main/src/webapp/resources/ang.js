var apka =angular.module('test', ['ngResource'])


apka.controller("cntr", function($http, $resource){
    var appi = this;
    var Books = $resource('books/:bookId')
    appi.book = new Books();
    
    function getData(){
        appi.books = Books.query(function success(data){
        	console.log("pobrano "+ data)
        });
    }  
    appi.addBook = function(book){
    	appi.book.$save(function(data){
    		getData();
    		appi.book = new Books();
    	})
  
    }
    
    appi.load = function(id){
    	appi.det = Books.get({bookId: id});
    	
    }
    
    appi.del = function(id){
        Books.remove({bookId: id}, function(resp){
        	console.log(resp);
        });
    };
    
    
});