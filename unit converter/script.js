var input = document.getElementById('input');
var result = document.getElementById('result');
var inputtype = document.getElementById('inputtype');
var resulttype = document.getElementById('resulttype');
var inputtypevalue,resulttypevalue;

input.addEventListener("keyup",myresult);
inputtype.addEventListener("change",myresult);
resulttype.addEventListener("change",myresult);

inputtypevalue = inputtype.value;
resulttypevalue = resulttype.value;

function myresult(){
    inputtypevalue = inputtype.value;
resulttypevalue = resulttype.value;

// meter to other units
if(inputtypevalue === "Meter" && resulttypevalue === "Kilometer"){
    result.value = Number(input.value) * 0.001;
}
else if(inputtypevalue === "Meter" && resulttypevalue === "Centimeter"){
    result.value = Number(input.value) * 100;
}
else if(inputtypevalue === "Meter" && resulttypevalue === "Meter"){
    result.value = input.value;
}
else if(inputtypevalue === "Meter" && resulttypevalue === "Feet"){
    result.value = Number(input.value) * 3.2808;
    }
    else if(inputtypevalue === "Meter" && resulttypevalue === "Mile"){
        result.value = Number(input.value) * 0.00062137;
        }
        else if(inputtypevalue === "Meter" && resulttypevalue === "Yard"){
            result.value = Number(input.value) * 1.0936;            ;
            }
            else if(inputtypevalue === "Meter" && resulttypevalue === "Inches"){
                result.value = Number(input.value) * 39.370;
                }

// kilometer to other units
if(inputtypevalue === "Kilometer" && resulttypevalue === "Meter"){
    result.value = Number(input.value) * 1000;
}
else if(inputtypevalue === "Kilometer" && resulttypevalue === "Centimeter"){
    result.value = Number(input.value) * 100000;
}
else if(inputtypevalue === "Kilometer" && resulttypevalue === "Kilometer"){
    result.value = input.value;
}
else if(inputtypevalue === "Kilometer" && resulttypevalue === "Feet"){
    result.value = Number(input.value) * 3280.8399;
}
else if(inputtypevalue === "Kilometer" && resulttypevalue === "Mile"){
    result.value = Number(input.value) * 0.62137;
    }
    else if (inputtypevalue === "Kilometer" && resulttypevalue === "Yard"){
        result.value = Number(input.value) * 1.609344;
        }
        else if(inputtypevalue === "Kilometer" && resulttypevalue === "Inches"){
            result.value = Number(input.value) * 39370;
            }

// centimeter to other units
if(inputtypevalue === "Centimeter" && resulttypevalue === "Meter"){
    result.value = Number(input.value) * 0.01;
    }
    else if(inputtypevalue === "Centimeter" && resulttypevalue === "Kilometer"){
        result.value = Number(input.value) * 0.00001;
        }
        else if(inputtypevalue === "Centimeter" && resulttypevalue === "Centimeter"){
            result.value = input.value;
            }
            else if(inputtypevalue === "Centimeter" && resulttypevalue === "Feet"){
                result.value = Number(input.value) * 30.48;
                }
                else if(inputtypevalue === "Centimeter" && resulttypevalue === "Mile"){
                    result.value = Number(input.value) * 0.00062137;
                    }
                    else if(inputtypevalue === "Centimeter" && resulttypevalue === "Yard"){
                        result.value = Number(input.value) * 0.001;
                        }
                        else if(inputtypevalue === "Centimeter" && resulttypevalue === "Inches"){
                            result.value = Number(input.value) * 2.54;
                            }
if(inputtypevalue === "Feet" && resulttypevalue === "Meter"){
    result.value = Number(input.value) * 0.3048;
    }
    else if(inputtypevalue === "Feet" && resulttypevalue === "Kilometer"){
        result.value = Number(input.value) * 3.2808;
        }
        else if(inputtypevalue === "Feet" && resulttypevalue === "Centimeter"){
            result.value = Number(input.value) * 30.48;
            }
            else if(inputtypevalue === "Feet" && resulttypevalue === "Inches"){
                result.value = Number(input.value) * 12;
                }
                else if(inputtypevalue === "Feet" && resulttypevalue === "Mile"){
                    result.value = Number(input.value) * 5280;
                    }
                    else if(inputtypevalue === "Feet" && resulttypevalue === "Yard"){
                        result.value = Number(input.value) * 3;
                        }
                        else if(inputtypevalue === "Feet" && resulttypevalue === "Feet"){
                            result.value = input.value;
                            }

if(inputtypevalue === "Inches" && resulttypevalue === "Meter"){
    result.value = Number(input.value) * 0.0254;
}
else if(inputtypevalue === "Inches" && resulttypevalue === "Kilometer"){
    result.value = Number(input.value) * 0.00062137;
}
else if(inputtypevalue === "Inches" && resulttypevalue === "Centimeter"){
    result.value = Number(input.value) * 2.54;
    }
    else if(inputtypevalue === "Inches" && resulttypevalue === "Feet"){
        result.value = Number(input.value) * 30.48;
        }
        else if(inputtypevalue === "Inches" && resulttypevalue === "Mile"){
            result.value = Number(input.value) * 5280;
            }
            else if(inputtypevalue === "Inches" && resulttypevalue === "Yard"){
                result.value = Number(input.value) * 1760;
                }
                else if(inputtypevalue === "Inches" && resulttypevalue === "Inches"){
                    result.value = input.value;
                    }
if(inputtypevalue === "Miles" && resulttypevalue === "Meter"){
    result.value = Number(input.value) * 1609.344;
}
else if(inputtypevalue === "Miles" && resulttypevalue === "Kilometer"){
    result.value = Number(input.value) * 1.609344;
    }
    else if(inputtypevalue === "Miles" && resulttypevalue === "Centimeter"){
        result.value = Number(input.value) * 1609.344;
        }
        else if(inputtypevalue === "Miles" && resulttypevalue === "Feet"){
            result.value = Number(input.value) * 5280;
            }
            else if(inputtypevalue === "Miles" && resulttypevalue === "Inches"){
                result.value = Number(input.value) * 5280;
                }
                else if(inputtypevalue === "Miles" && resulttypevalue === "Miles"){
                    result.value = input.value;
                    }
if(inputtypevalue === "Yards" && resulttypevalue === "Meter"){
    result.value = Number(input.value) * 0.9144;
}
else if(inputtypevalue === "Yards" && resulttypevalue === "Kilometer"){
    result.value = Number(input.value) * 1.0936;
    }
    else if(inputtypevalue === "Yards" && resulttypevalue === "Centimeter"){
        result.value = Number(input.value) * 9144;
        }
        else if(inputtypevalue === "Yards" && resulttypevalue === "Feet"){
            result.value = Number(input.value) * 30.48;
            }
            else if(inputtypevalue === "Yards" && resulttypevalue === "Inches"){
                result.value = Number(input.value) * 30.48;
                }
                else if(inputtypevalue === "Yards" && resulttypevalue === "Miles"){
                    result.value = Number(input.value) * 1760;
                    }
                    else if(inputtypevalue === "Yards" && resulttypevalue === "Yards"){
                        result.value = input.value;
                        }
}

