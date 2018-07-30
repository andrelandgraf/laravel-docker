@extends('layouts.app')

@section('content')
    @push('scripts')
        <!-- Scripts -->
        <!-- <script src="{{ asset('js/services/HttpService.js')}}"></script>
        <script src="{{ asset('js/services/PizzaService.js')}}"></script>-->
        <script src="{{ asset('js/components/pizza.js')}}"></script>
    @endpush
    <!-- Styles -->
    <link href="{{ asset('css/pizza.css') }}" rel="stylesheet">
    <div class="container">
        <div class="row justify-content-center">
            <div class="card">
                <div class="card-header">Pizza</div>
                <div class="card-body">
                    <form action="/pizzas" method="post">
                        @if ($errors->any())
                            <div class="alert alert-danger" role="alert">
                                Please fix the following errors
                            </div>
                        @endif
                            {{asset('js/components/pizza.js')}}
                        @include('pizza.table')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection


