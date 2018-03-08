<template>
    <div class="columns is-multiline">
        <player-card
            v-if="useCards"
            v-for="player in players"
            v-bind:player="player" :key="player.id"
        ></player-card>

        <table>
            <thead>
            <tr>
                <th>Tier</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
                <player-table-row
                    v-if="!useCards">

                </player-table-row>
            </tbody>
        </table>

    </div>
</template>

<script>
    import PlayerCard from './PlayerCard';
    import PlayerTableRow from './PlayerTableRow';

    export default {
        name: 'players',
        components: {
            PlayerTableRow,
            PlayerCard
        },
        data: function () {
            return {
                players: [
                    {id: 1, name: 'Player 1', price: '12.20', shares: 10},
                    {id: 2, name: 'Player 2', price: '13.10', shares: 22},
                    {id: 3, name: 'Player 4', price: '5.50', shares: 18},
                    {id: 4, name: 'Player 6', price: '6.63', shares: 33},
                ],
                'useCards': false
            }
        },
    }
</script>

<style scoped>
</style>
