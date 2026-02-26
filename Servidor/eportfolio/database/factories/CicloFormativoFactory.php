<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class CicloFormativoFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */

    /*
    protected static ?string $password;
    */

    /**
     * Define the model's default state.
     *
     *
     *
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        /*
            ''familia_profesional_id',
            'nombre',
            'codigo',
            'grado',
            'descripcion',
        */

        return [
            'familia_profesional_id' => $this->faker->word,
            'nombre' => $this->faker->word,
            'codigo' => $this->faker->word,
            'grado' => $this->faker->word,
            'descripcion' => $this->faker->sentence
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */

    /*
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
        */
}
