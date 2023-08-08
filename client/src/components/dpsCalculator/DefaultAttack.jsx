import { useEffect, useState } from "react";

export default function DefaultAttack(props){

    const [_damage, setDamage] = useState(0);
    const [_criticalDamage, setCriticalDamage] = useState(0);
    const [_dps, setDps] = useState(0);

    useEffect(() => {
        calc();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.stats, props.normalOrBoss])

    const calc = () => {
        // 스탯
        const attack = props.stats.find(v => v.id === 'attack').value
        const attackSpeed = props.stats.find(v => v.id === 'attackSpeed').value/100
        const criticalRate = props.stats.find(v => v.id === 'criticalRate').value/100
        const criticalDamage = props.stats.find(v => v.id === 'criticalDamage').value/100
        const bossAttack = props.stats.find(v => v.id === 'bossAttack').value/100
        const allDamageRate = props.stats.find(v => v.id === 'allDamageRate').value/100
        const rangedDamageRate = props.stats.find(v => v.id === 'rangedDamageRate').value/100
        const normalAttackDamageRate = props.stats.find(v => v.id === 'normalAttackDamageRate').value/100

        // 보스공격대미지
        const bossAttackDamage = props.normalOrBoss === 'B' ? 1+bossAttack : 1;

        // 대미지 = 공격력 * (1+모든대미지) * (1+스킬대미지) * (1+원거리대미지) * 기본공격대미지 * 보스공격대미지
        const damage = (attack*(1+allDamageRate)*(1+rangedDamageRate)*(1+normalAttackDamageRate) * bossAttackDamage).toFixed(1);
        // 대미지(치명타) = 대미지 * 치명타대미지
        const damageCritical = (damage * criticalDamage).toFixed(1);
        // DPS = (대미지 * 치명타확률 * 치명타 대미지 + 대미지 * (1-치명타확률)) * (1+공격속도)
        const dps = ((damage*criticalRate*criticalDamage+damage*(1-criticalRate))*(1+attackSpeed)).toFixed(1);

        setDamage(damage);
        setCriticalDamage(damageCritical);
        setDps(dps);

        props.setDefaultAttackDps(dps)
    }
    return (
        <div className="border-2 border-gray-900 rounded-lg w-full h-full p-3">
            <h1 className="text-xl font-bold text-gray-900">기본공격</h1>
            <div className=" mt-5">
                <dl className="-my-3 divide-y divide-gray-900 text-sm">
                    <div className="md:flex gap-1 py-1 justify-between">
                        <dt className="font-medium text-gray-900 text-center md:text-left">대미지</dt>
                        <dd className="text-gray-700 text-center md:text-right">{_damage}</dd>
                    </div>

                    <div className="md:flex gap-1 py-1 justify-between">
                        <dt className="font-medium text-gray-900 text-center md:text-left">치명타</dt>
                        <dd className="text-gray-700 text-center md:text-right">{_criticalDamage}</dd>
                    </div>

                    <div className="md:flex gap-1 py-1 justify-between">
                        <dt className="font-medium text-gray-900 text-center md:text-left">DPS</dt>
                        <dd className="text-gray-700 text-center md:text-right">{_dps}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}