<div class="pizza-selection">
    <b>Thanks god its pizza day! Select your pizza of the day!</b>
    <table id="pizzas" class="md-box">
        <tr>
            <th>Pizza</th>
            <th>Description</th>
            <th>Price</th>
            <th>Take it!</th>
        </tr>
        @foreach ($pizzas as $pizza)
        <tr>
            <td>{{$pizza->name}}</td>
            <td>{{$pizza->description}}</td>
            <td>{{$pizza->price}}&euro;</td>
            <td>
                <input type="checkbox" class="form-control" id={{$pizza->id}} name={{$pizza->id}}/>
            </td>
        </tr>
        @endforeach
        <tr>
            <td><input type="text" id="new_pizza_name" name="new_pizza_name" placeholder="name" maxlength="30"/></td>
            <td><input type="text" id="new_pizza_description" style="width:100%"
                       name="new_pizza_description" placeholder="description" maxlength="245"/>
            </td>
            <td><input type="number" id="new_pizza_price" name="new_pizza_price" placeholder="2.0" min="0" max="100"/></td>
            <td>
                <input type="button" class="md-box btn btn-default" id="add_new_pizza" onClick="addPizza()" value="Add Pizza!">
            </td>
        </tr>
    </table>
    <button type="submit" class="md-box btn btn-default">Submit your pizza selection!</button>
</div>