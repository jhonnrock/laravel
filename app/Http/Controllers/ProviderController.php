<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Provider;
use Illuminate\Support\Facades\DB;
class ProviderController extends Controller
{
    function index(){
        $provider=Provider::all();
        print_r($provider);
        // $providers= DB::table('providers')->get();
        // print_r($providers);
        // return view('providers.index', ['providers' => "welcome"]);

        // return view("providers.index");
    }
    function show(){
        $providers=Provider::all();
        $json['providers']=$providers->toArray();
        print_r(json_encode($json));

    }
    // function create(){
    //     $providers=Provider::all();

    //     return Response::json([''])
    // }
}
