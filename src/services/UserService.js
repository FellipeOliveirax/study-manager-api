const prisma = require('../config/database');

class UserService {
  async create(data) {
    const emailExists = await prisma.user.findUnique({ where: { email: data.email } });
    if (emailExists) throw new Error("Email já cadastrado");
    return await prisma.user.create({ data });
  }

  async getAll() {
    return await prisma.user.findMany();
  }

  async getById(id) {
    const user = await prisma.user.findUnique({ 
      where: { id: parseInt(id) },
      include: { enrollments: { include: { course: true } } } 
    });
    if (!user) throw new Error("Usuário não encontrado");
    return user;
  }

  async update(id, data) {
    return await prisma.user.update({ where: { id: parseInt(id) }, data });
  }

  async delete(id) {
    return await prisma.user.delete({ where: { id: parseInt(id) } });
  }
}

// Exportamos uma instância da classe
module.exports = new UserService();
