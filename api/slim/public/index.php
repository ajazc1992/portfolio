<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();


$app->get('/', function (Request $request, Response $response, $args) {
    $response->getBody()->write("Hello world!");
    return $response;
});
$app->get('/inicio/{nombre}', function (Request $request, Response $response, $args) {
    $nombre = $args["nombre"];
    $response->getBody()->write("Hello world!".$nombre);
    return $response;
});
$app->get('/books/{id}', function ($request, $response, $args) {

});
$middleware = $app->addErrorMiddleware(true,true,true);
$app->run();