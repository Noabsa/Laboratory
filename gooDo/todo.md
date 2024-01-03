<style>
:root{
    --one:#BB2649;
    --two:#BB2826;
    --three:#BB4D26;
    --four:#BB7326;
    --five:#BB9826;
    --six:#B9BB26;
    --seven:#94BB26;
    --eight:#26BB4D;
    --nine:#26BB98;
    --ten:#4D26BB;
}
d{
    color:transparent;
    font-size:10px;
    margin-right:5px;
    vertical-align:text-bottom;
    border-radius:2px;
}
u{
    color:transparent;
    background:transparent;
    font-size:9px;
    margin-right:5px;
    vertical-align:text-bottom;
    border-radius:2px;
    border:1px grey solid;
}
.one{background:var(--one)}
</style>

# BACKEND

<span>
<d style="background:var(--one)">-x-</d>
<d style="background:var(--two)">-x-</d>
<d style="background:var(--three)">-x-</d>
<d style="background:var(--four)">-x-</d>
<d style="background:var(--five)">-x-</d>
<d style="background:var(--six)">-x-</d>
<d style="background:var(--seven)">-x-</d>
<d style="background:var(--eight)">-x-</d>
<d style="background:var(--nine)">-x-</d>
<d style="background:var(--ten)">-x-</d>
<u>-x-</u></span>

## <span style="color:var(--one)"> Basic CDK structure

<d style="background:var(--one)">-x-</d>
Create RestApi  
<d style="background:var(--one)">-x-</d>
Create DynamoDB  
<d style="background:var(--one)">-x-</d>
Create Lambda with endpoints  
<d style="background:var(--one)">-x-</d>
String parameters  
<u>-x-</u>
Review how to link table to GraphQl  
<u>-x-</u>
JS DOCS

## <span style="color:var(--two)"> Security

<u>-x-</u>
Review Roles and Policies for API  
<u>-x-</u>
Review Roles and Policies for LAMBDA  
<u>-x-</u>
Review Roles and Policies for DB

## <span style="color:var(--three)"> Methods

<u>-x-</u>
**(POST)** Create task  
<u>-x-</u>
**(DELETE)** Delete task  
<u>-x-</u>
**(PUT)** Edit task  
<u>-x-</u>
**(PUT)** Mark task as done  
<u>-x-</u>
**(PUT)** Mark task as undone  
<u>-x-</u>
**(GET)** List tasks  
<u>-x-</u>
Errors management

## <span style="color:var(--four)"> Cognito system

<u>-x-</u>
Data encryptation  
<u>-x-</u>
Create user sesion  
<u>-x-</u>
Token management

## <span style="color:var(--five)"> Docker

<u>-x-</u>
Docker integration with lambdas

## <span style="color:var(--six)"> Test

<d style="background:var(--six)">-x-</d>
Jest structure  
<u>-x-</u>
Lambda testing  
<u>-x-</u>
Backend testing  
<u>-x-</u>
Frontend testing

## <span style="color:var(--seven)"> Maintenance

<u>-x-</u>
Monthly pr updating package json  
<u>-x-</u>
No push if no test

## <span style="color:var(--eight)"> Environments

<d style="background:var(--eight)">-x-</d>
Develope local and dev environments  
<u>-x-</u>
Deploy prod application  
<u>-x-</u>
Github prod branch  
<u>-x-</u>
Public prod and dev applications

## <span style="color:var(--nine)"> Flowchart

```mermaid
flowchart LR
    user([User])
    API["gooDo API"]

      user -- FRONTEND ACTION --> API

```
