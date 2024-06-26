import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Doacao } from './doacao'; // Certifique-se de que o caminho do arquivo está correto

@Entity()
export class Doador {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column({ type: 'text' })
  nome: string;

  @Column({ type: 'text' })
  telefone: string;

  @Column({ type: 'text' })
  tipoSanguineo: string;

  @Column({ type: 'boolean' })
  disponibilidade: boolean;

  @OneToMany(() => Doacao, doacao => doacao.doador)
  doacoes: Doacao[];
}
