@extends('backend.layouts.app')

@section('css')
<!-- Favicon -->
<link rel="shortcut icon" href="favicon.ico">
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="http://www.datatables.net/rss.xml">
<!-- Data table CSS -->
<link href="{{asset('vendors/bower_components/datatables/media/css/jquery.dataTables.min.css')}}" rel="stylesheet" type="text/css" />

<!-- Custom CSS -->
<link href="{{asset('dist/css/style.css')}}" rel="stylesheet" type="text/css">
@endsection

@section('js')
<!-- jQuery -->
<script src="{{asset('vendors/bower_components/jquery/dist/jquery.min.js')}}"></script>

<!-- Bootstrap Core JavaScript -->
<script src="{{asset('vendors/bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>

<!-- Data table JavaScript -->
<script src="{{asset('vendors/bower_components/datatables/media/js/jquery.dataTables.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/datatables.net-buttons/js/dataTables.buttons.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/datatables.net-buttons/js/buttons.flash.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/jszip/dist/jszip.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/pdfmake/build/pdfmake.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/pdfmake/build/vfs_fonts.js')}}"></script>

<script src="{{asset('vendors/bower_components/datatables.net-buttons/js/buttons.html5.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/datatables.net-buttons/js/buttons.print.min.js')}}"></script>
<script src="{{asset('dist/js/export-table-data.js')}}"></script>
<!-- Slimscroll JavaScript -->
<script src="{{asset('dist/js/jquery.slimscroll.js')}}"></script>

<!-- Fancy Dropdown JS -->
<script src="{{asset('dist/js/dropdown-bootstrap-extended.js')}}"></script>
<!-- Init JavaScript -->
<script src="{{asset('dist/js/init.js')}}"></script>
<script>
    $(document).ready(function() {
        $("#btnAdd").click(function(e) {
            e.preventDefault();
            var mydata = $("#deptForm").serialize();
            //alert(mydata);

            $.ajax({
                url: "department", 
                type: "POST",
                data: {
                        "_token": "{{ csrf_token() }}",
                        "data": mydata
                        },
                success: function(response) {
                    //alert(result.success);
                    $("#response").html(response).show();
                    $("#deptForm")[0].reset();
                    $("#responsive-modal").modal('hide');
                }
            });
            //$("responsive-modal").modal('hide');
        })
        function fetchrecords(){
            $.ajax({
                url:'department',
                type:'GET',
                success:function(response){
                    var tr = '';
                    for(var i=0; i<response.length; i++){
                       var id=response[i].id;
                       var name=response[i].name;
                       var details=response[i].details; 

                       tr += '<tr>';
                       tr += '<td>' + id + '</td>';  
                       tr += '<td>' + name + '</td>'; 
                       tr += '<td>' + details + '</td>'; 

                       tr += '<td><button type="button" class="btn btn-warning">Edit</button></td>'; 
                       tr += '<td><button type="button" class="btn btn-danger">Delete</button></td>'; 
                       tr += '</tr>';
                       $('#department_data').html(tr);
                    }
                }
            })
        }
        //fetchrecords();
    });
</script>
@endsection

@section('content')
<div class="container-fluid">

    <!-- Title -->
    <div class="row heading-bg bg-green">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">

            <h5 class="txt-light">Export</h5>
        </div>
        <!-- Breadcrumb -->
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <ol class="breadcrumb">
                <li><a href="index.html">Dashboard</a></li>
                <li><a href="#"><span>table</span></a></li>
                <li class="active"><span>Export</span></li>
            </ol>
        </div>
        <!-- /Breadcrumb -->
         
    </div>
    <!-- /Title -->

    <!-- Row -->
    <div class="row">
        <div class="col-sm-12">
            <div class="panel panel-default card-view">
                <div class="panel-heading">
                    @if('response')
                    <div id="response" class="alert alert-success"></div>
                    @endif
                    <div class="pull-left">
                        @if(session('success'))
                        <div class="alert alert-success">{{session('success')}}</div>
                        @endif
                        
                        <button class="btn btn-success" data-toggle="modal" data-target="#responsive-modal">New Department</button>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="panel-wrapper collapse in">
                    <div class="panel-body">
                        <div class="table-wrap">
                            <div class="table-responsive">
                                <!-- <table id="example" class="table table-hover display  pb-30">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Specialist Name</th>
                                            <th>Details</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>ID</th>
                                            <th>Department Name</th>
                                            <th>Details</th>
                                            <th style="width: 30%;">Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        @foreach($items as $item)
                                        <tr>
                                            <td>{{$loop->iteration}}</td>
                                            <td>{{$item->name}}</td>
                                            <td>{{$item->details}}</td>
                                            <td style="width: 30%;">



                                                <form onSubmit="return confirm('Are you sure to Delete')" action="{{route('specialist.destroy', $item->id)}}" method="post">
                                                    <a class="btn btn-success" href="{{route('specialist.show', $item->id)}}">View</a>
                                                    <a href="{{route('specialist.edit', $item->id)}}" class="btn btn-info">Edit</a>
                                                    @csrf
                                                    @method('DELETE')
                                                    <button class="btn btn-danger" type="submit" name="submit">Delete</button>
                                                </form>

                                            </td>

                                        </tr>
                                        @endforeach
                                    </tbody>
                                </table> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    https://youtu.be/uToRUKJGr5Q?si=lHfZsNy0Xy_PVpp3
    <!-- /Row -->
</div>
<!-- Modal Starts -->


<!-- /.modal -->
<div id="responsive-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h5 class="modal-title">Modal Content is Responsive</h5>
            </div>
            <div class="modal-body">
                <form id="deptForm">
                    <div class="form-group">
                        <label for="recipient-name" class="control-label mb-10">Department Name:</label>
                        <input type="text" class="form-control" id="recipient-name" name="name">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="control-label mb-10">Details:</label>
                        <textarea class="form-control" id="message-text" name="details"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" id="btnAdd" class="btn btn-danger">Add</button>
            </div>
        </div>
    </div>
</div>

<!-- Button trigger modal -->


@endsection