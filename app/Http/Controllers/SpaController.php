<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    /**
     * Renders SPA      
     *
     * @return view
     **/
    public function index()
    {
        return view('welcome');
    }
}
