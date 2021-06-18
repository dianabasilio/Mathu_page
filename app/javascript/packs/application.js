// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require rails-ujs
//= require materialize
//= require turboolinks
//= require_tree

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

$(document).ready( function(){

	$(".dropdown-trigger").dropdown();
	$('select').formSelect();
	$('.sidenav').sidenav();// Initialize collapse button
	$('.button-collapse').sideNav(
	{
		closeOnClick: true
	})
})
