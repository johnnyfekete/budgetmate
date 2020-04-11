<?php

namespace App\Http\Controllers;

class PageController
{
    /**
     * Return the simple page layout for the webapp
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('app');
    }
}
