const UserService = require('../services/UserService');

const response = (res, success, message, data = null, status = 200) => {
  return res.status(status).json({ success, message, data });
};

class UserController {

  async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      return response(res, true, "Usuário criado", user, 201);
    } catch (error) {
      return response(res, false, error.message, null, 400);
    }
  }

  async list(req, res) {
    const users = await UserService.getAll();
    return response(res, true, "Lista de usuários", users);
  }

  async show(req, res) {
    try {
      const user = await UserService.getById(req.params.id);
      return response(res, true, "Usuário encontrado", user);
    } catch (error) {
      return response(res, false, error.message, null, 404);
    }
  }

  async update(req, res) {
    try {
      const user = await UserService.update(req.params.id, req.body);
      return response(res, true, "Usuário atualizado", user);
    } catch (error) {
      return response(res, false, error.message, null, 400);
    }
  }

  async delete(req, res) {
    try {
      await UserService.delete(req.params.id);
      return response(res, true, "Usuário deletado", null);
    } catch (error) {
      return response(res, false, error.message, null, 400);
    }
  }
}

module.exports = new UserController();