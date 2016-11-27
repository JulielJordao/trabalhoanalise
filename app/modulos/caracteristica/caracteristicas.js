var Caracteristicas = require('./modelo');

var cadastrar = function(caracteristicas, salvo, error){
    new Caracteristicas(caracteristicas).save(function(err, resultados){
      if(err){
        error(err)
      } else {
        salvo(resultados);
      }
    });
};

exports.cadastrar = cadastrar;

var listar = function(quandoEncontrar, quandoDerErro){
    Caracteristicas.find().select({_id : true, nome : true, imagem: true}).exec(function(err, caracteristica){
    if(err){
      quandoDerErro(err)
    } else {
      quandoEncontrar(caracteristica)
    }
  });
};

exports.listar = listar;

var findByNome = function(nome, quandoEncontrar, quandoDerErro){
  Caracteristicas.findOne({nome : nome}).exec(function(err, valor){
    if(err){
      quandoDerErro(err);
    } else if(valor){
      quandoEncontrar(valor);
    }
  });
};

exports.findByNome = findByNome;

var findById = function(id, quandoEncontrar, quandoDerErro){
  Caracteristicas.findOne({_id : id}).exec(function(err, valor){
    if(err){
      quandoDerErro(err);
    } else if(valor){
      quandoEncontrar(valor);
    }
  });
};

exports.findById = findById;

var deletarRegistro = function(codigo, quandoEncontrar, quandoDerErro){
    Caracteristicas.findOne({_id : codigo}).remove().exec(function(err, caracteristica){
    if(err){
      quandoDerErro(err)
    } else {
      quandoEncontrar(caracteristica)
    }
  });
};

exports.deletarRegistro = deletarRegistro;

var atualizarRegistro = function(codigo, entity, quandoEncontrar, quandoDerErro){
    Caracteristicas.findByIdAndUpdate(codigo, entity).exec(function(err, caracteristica){
    if(err){
      quandoDerErro(err)
    } else {
      quandoEncontrar(caracteristica)
    }
  });
};

exports.atualizarRegistro = atualizarRegistro;
